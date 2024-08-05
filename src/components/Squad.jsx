import React from "react";
import './Squad.css'; // Ensure this CSS file is included correctly

export const Squad = () => {
  return (
    <div id="squad">
      <div className="container">
        <div className="row">
          {/* Text and lists section */}
          <div className="col-xs-12 col-md-12">
            <div className="squad-text">
              <h2>Squad Details</h2>
              <p><b>Please find the list of squads we operate in the Entertainment Squad:</b></p>
              <ul className="squad-list">
                <li><a href="https://etwiki.sys.comcast.net/display/RDK/E2E+New+Device+Primary+Squad" target="_blank" rel="noopener noreferrer">E2E New Device Primary Squad</a></li>
                <li><a href="https://etwiki.sys.comcast.net/display/RDK/E2E+New+Device+Secondary+Squad" target="_blank" rel="noopener noreferrer">E2E New Device Secondary Squad</a></li>
                <li><a href="https://etwiki.sys.comcast.net/pages/viewpage.action?pageId=1306609101" target="_blank" rel="noopener noreferrer">E2E New Device Xumo Streaming</a></li>
                <li><a href="https://etwiki.sys.comcast.net/display/RDK/FED+-+EntOS+TV+Devices" target="_blank" rel="noopener noreferrer">FED - EntOS TV Devices</a></li>
                <li><a href="https://etwiki.sys.comcast.net/display/RDK/FED+-+EntOS+Streaming+Devices" target="_blank" rel="noopener noreferrer">FED - EntOS Streaming Devices</a></li>
                <li><a href="https://etwiki.sys.comcast.net/display/RDK/FED+-+Non+EntOS+Devices" target="_blank" rel="noopener noreferrer">FED - Non EntOS Devices</a></li>
                <li><a href="https://etwiki.sys.comcast.net/display/RDK/CPE+-+QA+-+E2E+Patch+Re-Spin+Squad" target="_blank" rel="noopener noreferrer">E2E Patch Re-spin Squad</a></li>
                <li><a href="https://etwiki.sys.comcast.net/pages/viewpage.action?pageId=1239478129" target="_blank" rel="noopener noreferrer">Operational Excellence - Entertainment (OX-E)</a></li>
                <li><a href="https://etwiki.sys.comcast.net/display/RDK/RDK-E+RelQA" target="_blank" rel="noopener noreferrer">RDK-E RelQA</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
