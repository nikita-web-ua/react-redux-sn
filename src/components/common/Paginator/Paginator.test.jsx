import Paginator from "./Paginator";
import {create} from "react-test-renderer";

describe('Pagination', () => {
    test('page count is 11, but should be showed only 10', () => {
        let component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />)
        let root = component.root
        let spans = root.findAllByType('span')
        expect(spans.length).toBe(10)
    })
    test('if pages count > 1 button less should be present', () => {
        let component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />)
        let root = component.root
        let button = root.findAllByType("button")
        expect(button.length).toBe(1)
    })
})

