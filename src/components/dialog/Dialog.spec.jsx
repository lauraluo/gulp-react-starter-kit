//測試工具
import React from 'react'
import renderer from 'react-test-renderer'
import {mount, render, shallow} from 'enzyme'
import toJson from 'enzyme-to-json'

//被測試的相關模組
import DialogDemo from "./DialogDemo"
import Dialog from "./Dialog"
import Reflux from "reflux"
import {DialogActions} from "./Dialog"
import {DialogCore} from "./Dialog"
import DialogButton from "./DialogButton"


function getDialogInit(){
    return (<DialogCore ref={() => (null)} _relayout={() => (null)}/>);
}


describe('Dialog::', () => {
    describe('打開預設Dialog時', function () {
        let wrapper = mount(getDialogInit());
        let mockOpenedCallback = jest.fn();
        let mockClickBtnCallback = [jest.fn(),jest.fn()];
        let mockContent = (<p>this is content</p>);
        let dialogConfig = {
            title: "DialogTitle1",
            content: function () {
                return mockContent
            },
            didOpened: mockOpenedCallback,
            buttons: [
                {
                    text: "取消",
                    callback: mockClickBtnCallback[0]
                }, {
                    text: "送出鈕",
                    callback: mockClickBtnCallback[1]
                }
            ]
        };
        
        
        describe('可以設定以下資訊：標題，內容，開啟Dialog後的回調，按鈕(包含顯示名稱及點擊後的處理回調)', function () {
            
            DialogActions.showDialog(dialogConfig);
            
            //快照是用來確保畫面不會有dom物件被變更
            // it('產生快照', () => {
            //     expect(toJson(wrapper)).toMatchSnapshot();
            // })
            
            
            it("Dialog::state的isOpened", () => {
                expect(toJson(wrapper)).toMatchSnapshot();
                expect(wrapper.state('isOpened')).toBe(true);
            })

            it("Dialog::的結構應該要出現在畫面上", () => {
                expect(wrapper.find('.dialog-backdrop').length).toBe(1);
                expect(wrapper.find('.dialog-container').length).toBe(1);
            })

            it("Dialog::應該要呼叫開啟dialog的回調", () => {
                expect(mockOpenedCallback).toHaveBeenCalledTimes(1);
            })


            it('Dialog::標題，為使用者設定的標題', () => {
                expect(wrapper.find('header').length).toEqual(1);                
                expect(wrapper.find('header').text()).toEqual(dialogConfig.title);
            });

            it('Dialog::內容，為使用者設定的內容', () => {
                expect(wrapper.contains(mockContent)).toEqual(true);
            });


            it('Dialog::按鈕，為使用者設定的按鈕', () => {
                expect(wrapper.find(DialogButton).length).toEqual(dialogConfig.buttons.length);

                for(var i=0; i< dialogConfig.buttons.length; i++){
                    expect(wrapper.find(DialogButton).at(i).props().name).toEqual(dialogConfig.buttons[i].text);                
                    expect(wrapper.find(DialogButton).at(i).props().callback ).toEqual(dialogConfig.buttons[i].callback);
                }             
                
                
            });

            it('Dialog::只有最後一個按鈕為主要按鈕', () => {
                expect(wrapper.find(DialogButton).last().props().className).toEqual('dialog-button-inline-primary');                
                expect(wrapper.find(DialogButton).first().props().className).not.toEqual('dialog-button-inline-primary');                
            });

            describe('當設定的按鈕被點擊時', function () {
                
                it('每一個按鈕的callback必需被調用',()=>{
                    wrapper.find(DialogButton).at(0).simulate('click');
                    expect(mockClickBtnCallback[0]).toHaveBeenCalledTimes(1);
                    wrapper.find(DialogButton).last().simulate('click');
                    expect(mockClickBtnCallback[1]).toHaveBeenCalledTimes(1);
                    
                });                

            });
        });



        describe('使用者可以對Dialog的內容進行部份更新：允許更新的屬性有，標題，內容，按鈕', () => {
            let newMockContent = (<p>this is new content</p>);
            let updateDatas = {
                title: "new Dialog title",
                content: ()=> {
                    return newMockContent
                },
                buttons: [{
                    text: "新取消",
                    callback: jest.fn()
                }, {
                    text: "新送出鈕",
                    callback: jest.fn()
                }]
            };

            it('Dialog::標題，為使用者設定的標題', () => {
                DialogActions.updateDialog(updateDatas);
                
                expect(wrapper.find('header').length).toEqual(1);                
                expect(wrapper.find('header').text()).toEqual(updateDatas.title);
            });

            it('Dialog::內容，為使用者設定的內容', () => {
                DialogActions.updateDialog(updateDatas);
                expect(wrapper.contains(newMockContent)).toEqual(true);
            });


            // it('Dialog::按鈕，為使用者設定的按鈕', () => {
            //     expect(wrapper.find(DialogButton).length).toEqual(updateDatas.buttons.length);

            //     for(var i=0; i< updateDatas.buttons.length; i++){
            //         expect(wrapper.find(DialogButton).at(i).props().name).toEqual(updateDatas.buttons[i].text);                
            //         expect(wrapper.find(DialogButton).at(i).props().callback ).toEqual(updateDatas.buttons[i].callback);
            //     }             
            // });
        });


        describe('關閉Dialog', function () {
            return false;                
        }); 

        describe('Dialog打開方法的傳入參數，可以使用多型，包含以下內容', function () {
            describe('Dialog的Header：可以為空',function(){

            });
            
            describe('Dialog內容：除了是functional component也可以是包含斷行符號的字串，畫面會用br取代斷行符號呈現字串',function(){


            });
        });
        
    });

    describe('使用可以呼叫Confirm型的Dialog(目的在於簡化config的設定方式)',function(){
        describe('使用者只需要設定：Dialog標題、Dialog的內容、同意及取消的callback(陣列)', function () {
        });
        describe('允許使用者自己客制同意及取消按鈕的文案', function () {
        });          
    });
});


// describe('如果正確安裝在doucment上', function () {
//     it('relayout應該要呼叫一次',()=>{

//     });
// });  