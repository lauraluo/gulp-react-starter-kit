import { expect } from 'chai'
import {mount, render, shallow } from 'enzyme'
import React from 'react'

import Dialog from "./Dialog"



describe('Dialog Component: =', () => {
    describe('打開Dialog', () => {
        const wrapper = mount(<Dialog />)



        it('dialog應該出現在畫面上', () => {
            expect(wrapper.find('div').fisrt()).to.have.style("display", "block");
        })
    })
})