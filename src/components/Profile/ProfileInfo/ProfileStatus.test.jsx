import ProfileStatus from "./ProfileStatus";
import {create} from "react-test-renderer";


describe("ProfileStatus component", () => {
    test('status from props should be in state', () => {
        const component = create (<ProfileStatus status={"Test status"} />)
        const instance = component.getInstance()
        expect(instance.state.status).toBe("Test status")
    })
    test('after creation <p> should be displayed', () => {
        const component = create (<ProfileStatus status={"Test status"} />)
        const root = component.root
        let p = root.findByType('p')
        expect(p).not.toBeNull()
    })
    test('after creation <input> should not be displayed', () => {
        const component = create (<ProfileStatus status={"Test status"} />)
        const root = component.root
        expect(() => {
            let input = root.findByType('input')
        }).toThrow()
    })
    test('after creation <p> should contain correct innerText', () => {
        const component = create (<ProfileStatus status={'Test status'}/>)
        const root = component.root
        let p = root.findByType('p')
        expect(p.children[0]).toBe('Test status')
    })
    test('input should be displayed in editMode instead of <p>', () => {
        const component = create (<ProfileStatus status={'Test status'}/>)
        const root = component.root
        let p = root.findByType('p')
        p.props.onClick()
        let input = root.findByType('input')
        expect(input.props.value).toBe('Test status')
    })
    test('callback should be called', () => {
        const mockCallback = jest.fn()
        const component = create(<ProfileStatus status={'Test status'} updateProfileStatus={mockCallback}/>)
        const instance = component.getInstance()
        instance.disableEditStatus()
        expect(mockCallback.mock.calls.length).toBe(1)

    })
})