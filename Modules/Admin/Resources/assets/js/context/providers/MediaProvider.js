import React, {Component, createContext} from 'react';
import {withRouter} from 'react-router-dom';
import {api} from '../../utils';

const MediaContext = createContext({});
export const MediaConsumer = MediaContext.Consumer;


class MediaProvider extends Component {
    state = {
        directories: {},
        fileList: [],
        file: {},
        visible: false,
        loading: true,
    }
    methods = {
        getDirectories: this.getDirectories.bind(this),
        getList: this.getList.bind(this),
        findOneSelected: this.findOneSelected.bind(this),
        findManySelected: this.findManySelected.bind(this),
        create: this.create.bind(this),
        getOne: this.getOne.bind(this),
        update: this.update.bind(this),
        deleteOne: this.deleteOne.bind(this),
        toggleVisible: this.toggleVisible.bind(this)
    }

    getDirectories() {

        return api.get('directories')
            .then(({directories}) => {
                this.setState({
                    directories: directories,
                    loading: false
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    getList(params) {
        this.setState({
            loading: true
        });

        return api.get('medias', params)
            .then(({data}) => {
                this.setState({
                    fileList: data,
                    loading: false,
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    findOneSelected(id) {
        let file = this.state.fileList.find(file => file.id === id)
        return {
            src: file.file_name,
            value: file.id
        }
    }

    findManySelected(ids) {
        return ids.map(id => this.findOneSelected(id))
    }

    getOne(id) {
        api.get(`medias/${id}`)
            .then((({data}) => {
                this.setState({
                    file: data,
                    visible: true
                })
            }))
            .catch(err => {
                console.log(err);
            });
    }

    create(data) {
        this.setState({
            fileList: [
                data,
                ...this.state.fileList
            ]
        })
    }

    update(id, data) {
        api.put(`medias/${id}`, data)
            .then(() => {
                this.toggleVisible();
            })
            .catch(err => {
                console.log(err);
            });
    }

    deleteOne(id) {
        api.delete(`medias/${id}`)
            .then(() => {
                this.setState({
                    fileList: this.state.fileList.filter(item => item.id !== id)
                })
            })
            .catch(err => {
                console.log(err);
            });
    }

    toggleVisible() {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        return (
            <MediaContext.Provider value={{...this.state, ...this.methods}}>
                {this.props.children}
            </MediaContext.Provider>
        )
    }
}

export default withRouter(MediaProvider);
