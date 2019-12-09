import React from 'react';
import GoodsList from './goodslist';
import Select from './select';
import './App.scss';

const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

class App extends React.Component {
  state = {
    button_started: true,
    goods: [...goodsFromServer],
    valueOfSelect: 1,
  }

  start = () => {
    this.setState({ button_started: false });
  }

  reverse = () => {
    this.setState(
      prevState => ({ goods: prevState.goods.reverse() })
    );
  }

  sortAlphabetically = () => {
    this.setState(
      prevState => ({
        goods: prevState.goods.sort(
          (good, nextgood) => good.localeCompare(nextgood)
        ),
      })
    );
  }

  reset = () => {
    this.setState({
      goods: [...goodsFromServer],
      valueOfSelect: 1,
    });
  }

  sortByLength = () => {
    this.setState(
      prevState => ({
        goods: prevState.goods.sort(
          (good, nextgood) => (good.length > nextgood.length ? 1 : -1)
        ),
      })
    );
  }

  filterByLength = (event) => {
    this.setState(
      {
        valueOfSelect: event.target.value,
        goods: goodsFromServer
          .filter(good => good.length >= event.target.value),
      }
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Goods 1</h1>
        {this.state.button_started ? (
          <button
            className="button button_start"
            onClick={this.start}
            type="button"
          >
Start
          </button>
        ) : (
          <>
            <section className="controls">
              <button
                className="button button_reverse"
                onClick={this.reverse}
                type="button"
              >
                Reverse
              </button>

              <button
                className="button button_sortAlphabetically"
                onClick={this.sortAlphabetically}
                type="button"
              >
                Sort alphabetically
              </button>

              <button
                className="button button_reset"
                onClick={this.reset}
                type="button"
              >
                Reset
              </button>

              <button
                className="button button_sortByLength"
                onClick={this.sortByLength}
                type="button"
              >
                Sort by length
              </button>

              <Select
                value={this.state.valueOfSelect}
                filterByLength={this.filterByLength}
              />

            </section>
            <GoodsList goods={this.state.goods} />
          </>
        )
        }
      </div>
    );
  }
}

export default App;
