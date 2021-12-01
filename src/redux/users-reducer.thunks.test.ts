import {actions, follow, unfollow} from "./users-reducer";
import {usersAPI} from "../api/usersAPI";
import {APIResponseType, ResultCodesEnum} from "../api/api";

jest.mock('../api/usersAPI')
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>

const result: APIResponseType = {
    resultCode: ResultCodesEnum.Success,
    messages: [],
    data: {}
}

test("success follow thunk",async () => {
    userAPIMock.follow.mockReturnValue(Promise.resolve(result))

    const thunk = follow(1)
    const dispatchMock = jest.fn()
    const getStateMock = jest.fn()

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingInProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.followSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingInProgress(false, 1))
})


test("success unfollow thunk",async () => {
    userAPIMock.unfollow.mockReturnValue(Promise.resolve(result))

    const thunk = unfollow(1)
    const dispatchMock = jest.fn()
    const getStateMock = jest.fn()

    await thunk(dispatchMock, getStateMock, {})

    expect(dispatchMock).toBeCalledTimes(3)
    expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingInProgress(true, 1))
    expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollowSuccess(1))
    expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingInProgress(false, 1))
})