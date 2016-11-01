'use strict';

class Categories extends BaseComponent {
  constructor(props) {
    super();
    this._bind();
    this.state = {
      categories: props.data[0],
      templates: props.data[1]
    };
    console.log(props.data[0])
  }

  render() {
    var categories = this.state.categories.map((category, index)=> {
      return <Category name={category.name} key={category.id} image={category.image} />
    });
    return(
      <div className="pageBox">

        <h2 className="startingQ">WHAT WOULD</h2>
        <h2 className="startingQ">YOU LIKE TO</h2>
        <h2 className="startingQ">CREATE?</h2>
        <br></br>
        <div className = "categories pageContent">
          <div className="itemList">
            {categories}
          </div>
        </div>
      </div>
    )
  }
}

Categories.defaultProps = {
  categories: []
}
