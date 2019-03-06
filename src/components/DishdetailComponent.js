import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    constructor (props) {
        super(props);
        
        this.state = {
            selectedDish: null   
        }
    }

    renderComments(dish) {
        if (dish != null) {
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            const commentslist = dish.comments.map((comment) => {
                var dateFromComment = new Date(comment.date)
                var month = dateFromComment.getMonth()
                var day = dateFromComment.getDay()
                var year = dateFromComment.getFullYear()
                
                return (
                    <li key={comment.id}>
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}, {months[month]} {day}, {year}</p>
                    </li>
                );
            });

            return (
                <div>                    
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commentslist}
                    </ul>
                </div>
            );            
        }
            
        else {
            return(
                <div></div>
            );
        }
            
    }
    
    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.props.dish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(this.props.dish)}
                    </div>
                </div>
            </div>
        )
    }
}

export default Dishdetail;