import React, {useState} from 'react'
import styles from './Paginator.module.css'

type propsType = {
    totalItemsCount: number,
    pageSize: number,
    currentPage?: number,
    changePage?: (pageNumber: number) => void,
    portionSize?: number
}

let Paginator: React.FC<propsType> = ({totalItemsCount,
                                          pageSize,
                                          currentPage = 1,
                                          changePage = x => x,
                                          portionSize = 10}) => {

    let numberOfPages = Math.ceil(totalItemsCount / pageSize)
    let pages: Array<number> = []

    for (let i = 1; i <= numberOfPages; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(numberOfPages / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber -1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={styles.pagination}>
            { portionNumber>1 &&
            <button onClick={() => {setPortionNumber(portionNumber - 1)}}>left</button>}
            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((p) => {
                    return (
                        <span key={p}
                              className={currentPage === p ? styles.active : undefined}
                              onClick={() => changePage(p)}>{p}</span>
                    );
                })}
            {portionCount > portionNumber &&
            <button onClick={() => {setPortionNumber(portionNumber + 1)}}>right</button>}

        </div>
    )
}
export default Paginator