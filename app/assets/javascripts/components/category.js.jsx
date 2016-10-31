
class Category extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind("categoryRow");
    this.state = {
      category: this.props.name
    };
  }

  categoryRow() {
    return (
      <div className ="container-item">
        <button className="categoryButton">{this.state.category}</button>
      </div>
    );
  }

  render() {
    return (
      this.categoryRow()
    );
  }
}
