
import headData from '../configs/headMenu'

export const matchHeaderWithRouter = (path) => {
    if(path === '/') return 'index'

    let result = headData.find(a => a.url.split('/')[1] === path.split('/')[1])
    return result ? result.key : 'index'
}