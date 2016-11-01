
class Category extends BaseComponent {
  constructor(props) {
    super(props);
    this._bind("categoryRow");
    this.state = {
      categoryImage: this.props.image,
      categoryName: this.props.name
    };
  }

  categoryRow() {
    return (
      <div>
        <div className ="container-item">
          <img src={this.state.categoryImage}/>
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
