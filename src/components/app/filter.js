/*import React from 'react'

const Filter = () => {
        return (
            <div className="search-bar">
                <input type="text" className="input-xs" placeholder="Búsqueda"/>
            </div>
        )
    }

    export default Filter*/

import React, {Component} from 'react'

class Filter extends Component {
    render() {
        const { filterVal, filterUpdate } = this.props
        return (
            <form>
                <div className="search-bar">
                    <input type="text"
                      className="input-xs"
                      ref = 'filterInput'
                      placeholder="Búsqueda"
                      value={filterVal}
                        onChange={()=> {
                            this.refs.filterInput.value
                        }}
                      />
                </div>
            </form>
        )
    }
}
export default Filter