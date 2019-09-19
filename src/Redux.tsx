import {action, createAsyncAction, createReducer, isActionOf} from "typesafe-actions";
import {PostsInt} from "./Types";
import {combineReducers} from "redux";
import {Epic} from "redux-observable";
import {catchError, filter, map, mergeMap} from "rxjs/operators";
import {of} from "rxjs";
import {APIrequest} from "./requests";
import { StateType, ActionType } from 'typesafe-actions';



export type RootAction = ActionType<typeof Actions>;

declare module 'typesafe-actions' {
    interface Types {
        RootAction: RootAction;
    }
}
export const Actions={
    ActionsPostsStorage:createAsyncAction(
        "request_post_list",
        "success_post_list",
        "failure_post_list"
    )<undefined,PostsInt[],null>()
}
/*
const typesActions=typeof Actions
*/
export const pushReducers=combineReducers({
    posts:createReducer<PostsInt[]>([])
        .handleAction(Actions.ActionsPostsStorage.success,(state,action)=>action.payload)
})


export const postsEpic:Epic<RootAction,RootAction>=(action$)=>action$.pipe(
    filter(isActionOf(Actions.ActionsPostsStorage.request)),
    mergeMap(()=>APIrequest.sendPost.url),
    map(res => res ?
        Actions.ActionsPostsStorage.success(res) :
        Actions.ActionsPostsStorage.failure(null)
    ),
    catchError(() => of(Actions.ActionsPostsStorage.failure(null))),
)






