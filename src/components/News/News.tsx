import s from "./News.module.css"

type PropsType = {

}

const News: React.FC<PropsType> = (props) => {

    let arr = [2,3,4,5]

    let mapByThree = (arr: Array<number>) =>{
        let mappedArr = arr.map( (el) => el*3)
        return mappedArr
    }

    let spacer = (arr: Array<number>) => {
        let newArr = arr.map((el) => {
            let spacedEl = el + " "
            return spacedEl
        })
        return newArr
    }
    mapByThree(arr)

    return (
        <div>
            <h3>News</h3>
            Old array: {spacer(arr)}
            <br/>
            New array *3: {spacer(mapByThree(arr))}
        </div>
    );
}

export default News;