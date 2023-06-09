import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Header from '../component/Header';

// pontuação atual: player.score
// perguntas: assertions

class Feedback extends React.Component {
  handleClick = () => {
    const { history } = this.props;
    history.push('/');
  };

  onBtnClick = () => {
    const { history } = this.props;
    history.push('/ranking');
  };

  render() {
    const { score, assertions } = this.props;
    const THREE = 3;

    return (
      <>
        <Header />
        { assertions < THREE ? (
          <p data-testid="feedback-text">Could be better...</p>
        ) : (
          <p data-testid="feedback-text">Well Done!</p>
        )}

        <div className="player-results">
          <h4 data-testid="feedback-total-score">
            { score }
          </h4>
          <h4 data-testid="feedback-total-question">
            { assertions }
          </h4>
        </div>

        <button
          onClick={ this.handleClick }
          type="button"
          data-testid="btn-play-again"
        >
          Play Again
        </button>

        <button
          onClick={ this.onBtnClick }
          type="button"
          data-testid="btn-ranking"
        >
          Ranking
        </button>
      </>
    );
  }
}
const mapStateToProps = (globalState) => ({
  score: globalState.player.score,
  assertions: globalState.player.assertions,
});

Feedback.propTypes = {
  score: PropTypes.number.isRequired,
  assertions: PropTypes.number.isRequired,
  history: PropTypes.shape().isRequired,
};

export default connect(mapStateToProps)(Feedback);
