import React from 'react'
import {mount, render, shallow} from 'enzyme'
import DialogDemo from "./DialogDemo"
import Dialog from "./Dialog"
import Reflux from "reflux"
import {DialogActions} from "./Dialog"
import {DialogCore} from "./Dialog"
import renderer from 'react-test-renderer';


describe('Dialog Demo: ', () => {
    describe('檢查畫面上的元素', () => {
        var wrapper = mount(<DialogDemo/>);

        it('應該要有一個按鈕', () => {
            expect(wrapper.find('.btn').length).toBe(1);
        })
    })
});

function getDialog(){
    return (<DialogCore ref={() => (null)} _relayout={() => (null)}/>);
}

describe('Dialog: ', () => {
    describe('畫面打開的時後', function () {
        var wrapper = mount(getDialog());

        DialogActions.showDialog({
            title: "DialogTitle",
            content: function () {
                return (
                    <p>lalalalala</p>
                )
            },
            didOpened: function () {
                return null
            },
            buttons: [
                {
                    text: "取消",
                    callback: function () {
                        return null
                    }
                }, {
                    text: "送出鈕",
                    callback: function () {
                        return null
                    }
                }
            ]
        });

        it("檢查status", () => {
            expect(wrapper.state('isOpened')).toBe(true);

        })

        it("檢查Div", () => {
            expect(wrapper.find('.dialog-backdrop').length).toBe(1);
        })

        it('查看畫面是否正常', () => {
            const tree = renderer.create(getDialog()).toJSON();
            expect(tree).toMatchSnapshot();
        });



    });
});
