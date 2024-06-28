/* import React, { Component } from 'react';
export class ClassComponent extends Component {
  state = {
    email: this.props.Email || '',
  };

  static getDerivedStateFromProps(props, state) {
    console.log(props.Email);
    if (props.email !== state.email) {
      return {
        email: props.email,
      };
    }
    return null;
  }

  handleChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  render() {
    return (
      <input
        type='email'
        className='form-control'
        id='exampleInputEmail1'
        aria-describedby='emailHelp'
        placeholder='Enter email'
        value={this.state.email}
        onChange={this.handleChange}
      />
    );
  }
}

export default ClassComponent; */

/* import React, { Component } from 'react';
export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            users: res,
            loading: false,
          });
        });
    }, 5000);
  }
  render() {
    const { users, loading } = this.state;
    return loading ? (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
          marginTop: '150px',
        }}
      >
        <div class='spinner-border' role='status'>
          <span class='sr-only'></span>
        </div>
      </div>
    ) : (
      <ul className='container-sm m-auto'>
        {users.map((user) => (
          <li
            className='w-25'
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              alignContent: 'center',
              marginTop: '150px',
              border: '1px solid black',
            }}
            key={user.id}
          >
            {user.name}
          </li>
        ))}
      </ul>
    );
  }
} */

/* import React, { Component } from 'react';

class ClassComponent extends Component {
  state = {
    users: [],
    loading: true,
    start: false,
  };

  handleChange = (e) => {
    console.log('fdvf');
    if (this.state.start) {
      this.setState({
        ...this.state,
        start: false,
      });
    } else {
      this.setState({
        ...this.state,
        start: true,
      });
    }
  };

  componentDidUpdate() {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            ...this.state,
            users: res,
            loading: false,
          });
        })
        .catch((err) => console.log(err));
    }, 4000);
  }

  render() {
    const { users, loading, start } = this.state;
    return (
      <>
        <button
          className='btn btn-sm btn-outline-dark'
          onClick={this.handleChange}
        >
          show the users
        </button>
        <button
          className='btn btn-sm btn-outline-dark'
          onClick={this.handleChange}
        >
          {' '}
          hide the users
        </button>
        {start ? (
          <div>
            {loading ? (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignContent: 'center',
                  marginTop: '150px',
                }}
              >
                <div class='spinner-border' role='status'>
                  <span class='sr-only'></span>
                </div>
              </div>
            ) : (
              <ul className='container-sm m-auto'>
                {users.map((user) => (
                  <li
                    className='w-25'
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      alignContent: 'center',
                      marginTop: '150px',
                      border: '1px solid black',
                    }}
                    key={user.id}
                  >
                    {user.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ) : (
          <div>Nothing to display</div>
        )}
      </>
    );
  }
}

export default ClassComponent; */

import React, { Component } from 'react';

class ClassComponent extends Component {
  state = {
    timeRemaining: 1,
  };

  componentDidMount() {
    this.intId = setInterval(() => {
      this.setState({
        timeRemaining: this.state.timeRemaining + 1,
      });
    }, 1000);
  }

  componentWillUnmount() {
    console.log('nuy');
    clearInterval(this.intId);
  }

  render() {
    return (
      <div>
        Timer-{this.state.timeRemaining}
        <button
          onClick={() => {
            this.setState({
              timeRemaining: 1,
            });
          }}
        >
          Reset
        </button>
      </div>
    );
  }
}

export default ClassComponent;
