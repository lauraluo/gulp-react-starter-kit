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


var mockRelayout = {};

function getDialogInit(){
    mockRelayout = jest.fn();
    return (<DialogCore ref={() => (null)} _relayout={mockRelayout}/>);
}


describe('Dialog::', () => {
    describe('當使用者呼叫showDialog打開Dialog時', function () {
        let wrapper = {};
        let initState = {};
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

        beforeAll(()=>{
            wrapper = mount(getDialogInit());
            initState = wrapper.state();
            
            DialogActions.showDialog(dialogConfig);
        });
        
        describe('當呼叫showDialog成功後', function () {
            
            it("期望state的isOpened為true", () => {
                expect(wrapper.state('isOpened')).toBe(true);
            })

            it("期望代表遮罩及視窗的結構應該要出現在畫面上", () => {
                expect(wrapper.find('.dialog-backdrop').length).toBe(1);
                expect(wrapper.find('.dialog-container').length).toBe(1);
            })

            // it("期望props.relayout要至少被呼叫一次:允許使用者利用HOC component包裝組件，以附予Dialog組件改變全局佈局的能力", () => {
            //  覺得功能可以簡化為調用will opened 來relayout
            //     expect(mockRelayout).toHaveBeenCalledTimes(1);
            // })

            it("期望要呼叫開啟dialog的回調", () => {
                expect(mockOpenedCallback).toHaveBeenCalledTimes(1);
            })


            it('期望標題為使用者設定的標題', () => {
                expect(wrapper.find('header').exists()).toBe(true);                   
                expect(wrapper.find('header').text()).toEqual(dialogConfig.title);
            });

            it('期望內容，為使用者設定的內容', () => {
                expect(wrapper.contains(mockContent)).toEqual(true);
            });


            it('期望按鈕，為使用者設定的按鈕', () => {
                expect(wrapper.find(DialogButton).length).toEqual(dialogConfig.buttons.length);

                for(var i=0; i< dialogConfig.buttons.length; i++){
                    expect(wrapper.find(DialogButton).at(i).props().name).toEqual(dialogConfig.buttons[i].text);                
                    expect(wrapper.find(DialogButton).at(i).props().callback ).toEqual(dialogConfig.buttons[i].callback);
                }             
                
                
            });

            it('期望只有最後一個按鈕為主要按鈕', () => {
                expect(wrapper.find(DialogButton).last().props().className).toEqual('dialog-button-inline-primary');                
                expect(wrapper.find(DialogButton).first().props().className).not.toEqual('dialog-button-inline-primary');                
            });

            describe('當設定的按鈕被點擊時', function () {
                
                it('期望每一個按鈕的callback必需被調用',()=>{
                    wrapper.find(DialogButton).at(0).simulate('click');
                    expect(mockClickBtnCallback[0]).toHaveBeenCalledTimes(1);
                    wrapper.find(DialogButton).last().simulate('click');
                    expect(mockClickBtnCallback[1]).toHaveBeenCalledTimes(1);
                    
                });                

            });

            describe('當使用者對Dialog的內容進行部份更新：允許更新的屬性有，標題，內容，按鈕', () => {
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


                        beforeAll(()=>{
                            DialogActions.updateDialog(updateDatas);
                        });

                        it('期望標題，為使用者更新的標題', () => {
                            expect(wrapper.find('header').length).toEqual(1);                
                            expect(wrapper.find('header').text()).toEqual(updateDatas.title);
                        });

                        it('期望內容，為使用者更新的內容', () => {
                            expect(wrapper.contains(newMockContent)).toEqual(true);
                        });


                        it('期望按鈕，為使用者更新的按鈕', () => {
                            expect(wrapper.find(DialogButton).length).toEqual(updateDatas.buttons.length);

                            for(var i=0; i< updateDatas.buttons.length; i++){
                                expect(wrapper.find(DialogButton).at(i).props().name).toEqual(updateDatas.buttons[i].text);                
                                expect(wrapper.find(DialogButton).at(i).props().callback ).toEqual(updateDatas.buttons[i].callback);
                            }             
                        });

                        describe("當使用者更新Dialog，如果title更新為空值",()=> {
                            beforeAll(()=>{
                                DialogActions.updateDialog({title: ''});
                            });

                            it('期望<header/>的結構必需消失', () => {
                                expect(wrapper.find('header').exists()).toBe(false);                 
                            });  
                        });

                    });



            });
            describe('當使用者呼叫hideDialog來關閉Dialog', function () {

                beforeAll(()=>{
                    DialogActions.hideDialog();
                });

                it('reflux的state必需回到初始值',()=>{
                    var closedState = wrapper.state();
                    Object.keys(closedState).map(function(key, index) {
                        if(initState[key]){
                            expect(closedState[key]).toEqual(initState[key]);  
                        }
                    });
                });               
            });  
    });

    describe('當使用者呼叫showDialog打開Dialog時', function () {
        let wrapper = {};
        var stringContent = ["apple","ball","car"];
        let dialogConfig = {
            content: stringContent.join('\n')
        };

        beforeAll(()=>{
            wrapper = mount(getDialogInit());
            DialogActions.hideDialog();
            DialogActions.showDialog(dialogConfig);
        });

        describe('當Dialog的title省略不設定',function(){
            it('期望<header/>的結構不會出現', () => {
                expect(wrapper.find('header').exists()).toBe(false);                   
            }); 
        });
        
        describe('當Dialog的內容設定為斷行符號的字串(ex "a斜線nA")',function(){
            it('期望畫面會用<span/>取代斷行符號呈現項目', () => {
                var items = wrapper.find('span').map(node => node.text());                
                expect(wrapper.find('.dialog-box-body').find('span').length).toEqual(stringContent.length);
                expect(items).toEqual(stringContent);                
            });
        });

        it("期望就算只填了內容，代表遮罩及視窗的結構還是能正確呈現在畫面上", () => {
            expect(wrapper.find('.dialog-backdrop').length).toBe(1);
            expect(wrapper.find('.dialog-container').length).toBe(1);
        })
    });

    describe('使用可以呼叫Confirm型的Dialog(目的在於簡化config的設定方式)',function(){
        describe('使用者只需要設定：Dialog標題、Dialog的內容、同意及取消的callback(陣列)', function () {
            return false;
        });
        describe('允許使用者自己客制同意及取消按鈕的文案', function () {
            return false;
        });          
    });
});


// describe('如果正確安裝在doucment上', function () {
//     it('relayout應該要呼叫一次',()=>{

//     });
// });  