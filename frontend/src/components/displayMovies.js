import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default class displayItems extends Component {

    state = {
        posters: [],
    }

    truncDate = (a) =>{
        return a.substring(0,4)
    }

    showItems = () =>{
        return this.props.state.results.map((each, i)=>{
            return (
                <div className="one-movie-result">
                <div className="listing-img">
                    {this.props.state[each.id] &&
                    <div>
                        <img src={this.props.state[each.id]} alt="img" className="poster-size"/>
                        <Link to={{
                        pathname: `/${this.props.state.type}/${each.id}`,
                        each: {
                            each
                        }}} className="listing-add-btn">
                            Add it
                        </Link>
                        </div>
                    }
                </div>
                <div className="listing-info">
                    <h3>
                        {each.name &&
                            each.name
                        }
                        {!each.name &&
                            each.original_title
                        }
                    </h3>
                    <h4>
                    {each.first_air_date &&
                        <div>
                            {this.truncDate(each.first_air_date)}
                        </div>    
                    }
                    {each.release_date &&
                        <div>
                            {this.truncDate(each.release_date)}
                        </div>
                    }
                    </h4>
                    <p className="description">
                        {each.overview}
                    </p>
                </div>
                </div>
                    
            )
        })
    }

    render() {
        console.log('rerendering', this.props)
        return (
            <div>
                {this.showItems()}
            </div>
        )
    }
}