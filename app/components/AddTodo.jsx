var React = require('react');

var AddTodo = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var addTodoText = this.refs.addTodoText.value;
        if (addTodoText.length > 0) {
            this.refs.addTodoText.value = "";
            this.props.onAddTodo(addTodoText);
        } else {
          this.refs.addTodoText.focus();
        }
    },
    render: function() {
        return (
            <div className="add-todo">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" ref="addTodoText" placeholder="Add a todo"/>
                    <button type="submit" className="button expanded">Add todo</button>
                </form>
            </div>
        );
    }
});

module.exports = AddTodo;
