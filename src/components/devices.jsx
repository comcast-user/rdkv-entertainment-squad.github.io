import React from "react";
import data from '../data/data.json';  // Correct path relative to src/components
import './Devices.css';  // Ensure this path is correct relative to your component

export const Devices = () => {
  const { devices } = data;  // Extract devices from data.json

  // Filter devices for each squad
  const primarySquadDevices = devices.filter(device => device['Squad Name'] === 'E2E New Device Primary Squad');
  const secondarySquadDevices = devices.filter(device => device['Squad Name'] === 'E2E New Device Secondary Squad');

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Device Manager</h2>
          <p className="intro-paragraph">
            In Entertainment Squad, we are testing multiple video devices. 
            Please find the list of devices currently in use for Entertainment Squad.
          </p>
        </div>

        {/* Primary Squad Table */}
        <div className="table-container">
          <h3>E2E New Device Primary Squad:</h3>
          <table className="device-table">
            <thead>
              <tr>
                <th>Device Model</th>
                <th>MAC</th>
                <th>Panel Size</th>
                <th>Variant</th>
                <th>Squad Name</th>
                <th>Team</th>
                <th>Device Group</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {primarySquadDevices.length > 0 ? (
                primarySquadDevices.map((device, index) => (
                  <tr key={`${device.model}-${index}`}>
                    <td>{device.model}</td>
                    <td>{device.mac}</td>
                    <td>{device.panelSize}</td>
                    <td>{device.variant}</td>
                    <td>{device['Squad Name'] || 'N/A'}</td>
                    <td>{device.team}</td>
                    <td>{device.devicegroup}</td>
                    <td>{device.status || 'N/A'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No devices found for E2E New Device Primary Squad.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Secondary Squad Table */}
        <div className="table-container">
          <h3>E2E New Device Secondary Squad:</h3>
          <table className="device-table">
            <thead>
              <tr>
                <th>Device Model</th>
                <th>MAC</th>
                <th>Panel Size</th>
                <th>Variant</th>
                <th>Squad Name</th>
                <th>Team</th>
                <th>Device Group</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {secondarySquadDevices.length > 0 ? (
                secondarySquadDevices.map((device, index) => (
                  <tr key={`${device.model}-${index}`}>
                    <td>{device.model}</td>
                    <td>{device.mac}</td>
                    <td>{device.panelSize}</td>
                    <td>{device.variant}</td>
                    <td>{device['Squad Name'] || 'N/A'}</td>
                    <td>{device.team}</td>
                    <td>{device.devicegroup}</td>
                    <td>{device.status || 'N/A'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6">No devices found for E2E New Device Secondary Squad.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
