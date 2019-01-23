
import headData from '../configs/headMenu'

export const matchHeaderWithRouter = (path) => {
    if(path === '/') return 'index'

    let result = headData.find(a => a.url.split('/')[1] === path.split('/')[1])
    return result ? result.key : 'index'
}

export const arrDelete = (preArr,value) => {
    if( !Array.isArray(preArr) || !value) return
    let temp = [...preArr]
    let index = temp.indexOf(value)
    temp.splice(index,1)
    return temp
}
