import React, { Component, } from 'react';
import { Table } from 'reactstrap';

import IdleTimer from 'react-idle-timer';
import TimeoutModal from './TimeoutModal';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }

    this.idleTimer = null;
    this.logoutTimer = null;
  }

  onIdle = () => {
    this.togglePopup();
    this.logoutTimer = setTimeout(() => {
      this.handleLogout();
    }, 1000 * 5 * 1); // 5 seconds
  }

  togglePopup = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  }

  handleStayLoggedIn = () => {
    if (this.logoutTimer) {
      clearTimeout(this.logoutTimer);
      this.logoutTimer = null;
    }
    this.idleTimer.reset();
    this.togglePopup();
  }

  handleLogout = () => {
    this.props.history.push('/');
  }

  render() {
    const { showModal } = this.state;

    return <div className="w-25">
      <b className="mb-2 d-block">Dashboard</b>

      <Table className="table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Larry</td>
            <td>the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>

      <button className="btn btn-danger" onClick={this.handleLogout}>Logout</button>

      <IdleTimer
        ref={ref => { this.idleTimer = ref }}
        element={document}
        stopOnIdle={true}
        onIdle={this.onIdle}
        timeout={1000 * 10 * 1} // 10 seconds
      />

      <TimeoutModal
        showModal={showModal}
        togglePopup={this.togglePopup}
        handleStayLoggedIn={this.handleStayLoggedIn}
      />

    </div>
  }
}

export default Dashboard;