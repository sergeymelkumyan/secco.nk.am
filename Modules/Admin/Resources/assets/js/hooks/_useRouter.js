import {useMemo} from "react"
import {useParams, useLocation, useHistory, useRouteMatch} from 'react-router-dom'
import queryString from 'query-string'

export default function useRouter() {
    const params = useParams(), location = useLocation(), history = useHistory(), match = useRouteMatch()

    return useMemo(() => {
        return {
            push: history.push,
            replace: history.replace,
            pathname: location.pathname,
            query: {
                ...queryString.parse(location.search),
                ...params
            },
            match,
            location,
            history
        };
    }, [params, match, location, history])
}
