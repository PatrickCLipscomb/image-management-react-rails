
class Category extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind("categoryRow");
    this.state = {
      categoryImg: this.props.img,
      categoryName: this.props.name
    };
  }

  categoryRow() {
    return (
      <div>
        <div className ="container-item">
          <img src={this.state.categoryImg}/>
        </div>
        <div className ="container-item">
          <button className="categoryButton">{this.state.categoryName}</button>
        </div>
      </div>
    );
  }

  render() {
    return (
      this.categoryRow()
    );
  }
}
