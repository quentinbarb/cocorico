var React = require('react');
var ReactBootstrap = require('react-bootstrap');
var ReactIntl = require('react-intl');
var classNames = require('classnames');

var Title = require('./Title');

var Button = ReactBootstrap.Button;

var VoteRadioButtons = React.createClass({

    mixins: [
        ReactIntl.IntlMixin
    ],

    getDefaultProps: function() {
        return {
            onVote: (e, ballotValue) => null,
            vote: null,
        };
    },

    getInitialState() {
        return {
            ballotValue: null,
        }
    },

    render: function() {
        var labels = this.props.vote.labels;

        var button_opts = {};
        if (this.state.ballotValue == null) {
            button_opts['disabled'] = 'disabled';
        }

        return (
            <form>
                <ul className="list-unstyled" >
                    {labels.map((label, index) => { return (
                        <li>
                            <label className="vote-label">
                                <input type="radio" name="ballot" value={index}
                                    onChange={(e) => this.setState({ballotValue: index})}/>
                                <i>
                                    <Title text={label}/>
                                </i>
                            </label>
                        </li>
                    ); })}
                </ul>
                <Button {...button_opts}
                    className="btn-vote btn-primary"
                    onClick={(e) => this.props.onVote(e, this.state.ballotValue)}>
                        {this.getIntlMessage('vote.VALIDATE_BALLOT')}
                </Button>
            </form>
        );
    }
});

module.exports = VoteRadioButtons;
