import $ from "jquery"
import React from 'react'

function DialogRelayout(WrappedComponent, configs) {

    configs = Object.assign({
        root: '#GlobalContainer', //for body > div
        modifierRootClass: 'dialog-opened', //modifier root
        container: '.container', //for prevent page scroll
        containerBody: '.container-body' //for positioning main content container
    }, configs);

    class MixiedComponentWithRelayout extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: null
            };
        }

        _relayout() {
            var root = $(configs.root),
                container = $(configs.container),
                containerBody = $(configs.containerBody),
                posY = $(document).scrollTop();

            if ((this.state.isOpened && root.hasClass(configs.toggleClass)) || (!this.state.isOpened && !root.hasClass(configs.toggleClass))) 
                return;

            if (this.state.isOpened) {
                //modifier root
                root.toggleClass(configs.modifierRootClass);
                //prevent page scroll for mobile
                container.css({position: 'absolute'});
                //positioning main content container
                containerBody.css({
                    position: 'fixed',
                    top: -(posY)
                });
            } else {
                //reset all
                root.removeClass(configs.modifierRootClass);
                container.removeAttr('style');
                containerBody.removeAttr('style');
                $(document).scrollTop(posY);
            }

        }

        proc() {
            console.log('proc');
        }

        componentDidMount() {
            console.log('relayout componentDidMount');
        }

        componentWillReceiveProps() {
            console.log('relayout componentWillReceiveProps');
        }

        shouldCompoentUpdate() {
            console.log('relayout shouldCompoentUpdate');
        }

        componentWillUpdate() {
            console.log('relayout componentWillUpdate');
        }

        componentWillUnmount() {
            console.log('relayout componentWillUnmount');
        }

        componentWillMount() {
            console.log('relayout componentWillMount');
        }

        componentDidUpdate() {
            console.log('relayout componentDidUpdate');
            // var root = $(configs.root),     container = $(configs.container),
            // containerBody = $(configs.containerBody),     posY = $(document).scrollTop();
            // if ((this.state.isOpened && root.hasClass(configs.toggleClass)) ||
            // (!this.state.isOpened && !root.hasClass(configs.toggleClass)))     return; if
            // (this.state.isOpened) {     //modifier root
            // root.toggleClass(configs.modifierRootClass);     //prevent page scroll for
            // mobile     container.css({position: 'absolute'});     //positioning main
            // content container     containerBody.css({         position: 'fixed', top:
            // -(posY)     }); } else { //reset all
            // root.removeClass(configs.modifierRootClass); container.removeAttr('style');
            //   containerBody.removeAttr('style'); $(document).scrollTop(posY); }
        }

        render() {
            var props = Object.assign({}, this.props, {
                ref: this.proc.bind(this),
                _relayout: this._relayout
            })

            return <WrappedComponent {...props}/>
        }
    }

    return MixiedComponentWithRelayout;
}
export default DialogRelayout;