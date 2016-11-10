var React = require('react');
var TodoList = require('TodoList');

var TodoApp = React.createClass({
    getInitialState: function() {
        return {
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                }, {
                    id: 2,
                    text: 'Clean the yard'
                }, {
                    id: 3,
                    text: 'Feed the cat'
                }, {
                    id: 4,
                    text: 'Clean the kitchen'
                }
            ]
        }
    },
    render: function() {
        var {todos} = this.state;

        return (<TodoList todos={todos}/>);
    }
});

module.exports = TodoApp;
