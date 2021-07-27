import React, {Component, createContext} from 'react'
import {withRouter} from 'react-router-dom'
import {api, scrollTo} from "../../utils"
import {notification} from "antd"


const DataContext = createContext({})
export const DataConsumer = DataContext.Consumer

class DataProvider extends Component {
    state = {
        list: {},
        current: undefined,
        error: null,
        pagination: {
            defaultPageSize: 10,
            pageSizeOptions: ['10', '20', '30', '40', '50'],
            showSizeChanger: true,
            hideOnSinglePage: true,
            position: ['bottomCenter'],
            showTotal: function (total, range) {
                return `${range[0]}-${range[1]} of ${total} items`
            }
        },
        loading: true
    }

    methods = {
        getList: this.getList.bind(this),
        getOne: this.getOne.bind(this),
        create: this.create.bind(this),
        update: this.update.bind(this),
        deleteOne: this.deleteOne.bind(this),
        deleteMany: this.deleteMany.bind(this),
        onPagination: this.onPagination.bind(this)
    }

    getList(resource, params = {}) {
        let newState = {}

        api.get(resource, params)
            .then(({data, meta}) => {
                newState = {
                    list: {
                        ...this.state.list,
                        [resource]: data,
                    },
                    loading: false
                }

                if (meta) {
                    newState = {
                        ...newState,
                        pagination: {
                            ...this.state.pagination,
                            current: meta.current_page,
                            pageSize: meta.per_page,
                            total: meta.total,
                        },
                    }
                }
            })
            .catch(error => {
                newState = {
                    error,
                    loading: false
                }
            })
            .then(() => {
                this.setState({...newState})
            })
    }

    getOne(resource, param) {
        this.setState({
            current: undefined,
            loading: true
        })

        return api.get(`${resource}/${param}`).then(({data}) => {
            this.setState({
                current: data,
                loading: false
            })
        })
    }

    create(resource, data) {
        return api.post(resource, data)
            .then(() => {
                notification.success({
                    message: 'Create Successfully',
                    duration: 2
                })
                this.setState({
                    current: undefined
                })
                this.props.history.push('/admin/' + resource)
            })
            .catch(err => {
                console.log(err)
            })
    }

    update(resource, param, data) {
        return api.put(`${resource}/${param}`, data)
            .then(() => {
                notification.success({
                    message: 'Update Successfully',
                    duration: 2
                })
                this.setState({
                    current: undefined
                })
                this.props.history.push('/admin/' + resource)
            })
            .catch(err => {
            })
    }

    deleteOne(resource, key, param) {
        api.delete(`${resource}/${param}`)
            .then(() => {
                this.setState({
                    list: {
                        [resource]: this.state.list[resource].filter(item => item[key] !== param)
                    }
                })
            })
            .catch(error => {
                this.setState({
                    error
                })
            })
    }

    deleteMany(resource, key, params) {
        params[key].map(param => {
            this.deleteOne(resource, key, param)
        })
    }

    onPagination(resource, params) {
        this.getList(resource, {
            page: params.current,
            per_page: params.pageSize
        })

        scrollTo(0, 800)
    }

    render() {
        return (
            <DataContext.Provider value={{...this.state, ...this.methods}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export default withRouter(DataProvider)
