import React from 'react';
import FileSaver from 'file-saver';
import classNames from 'classnames';
import { AppContext } from './AppContext';

export default class Export extends React.Component {
  constructor(props) {
    super(props);
    this.download = this.download.bind(this);
    this.export = this.export.bind(this);
    this.state = {
        center: this.props.center,
        white: this.props.white,
        token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1dWlkIjoiNzdiN2MzMzUtYzgwMi00Yjk5LTk4ZTctYzk0ZmM3NzU1OTM0IiwiZW1haWwiOiJ0ZXN0X2V4cG9ydF8xQGdtYWlsLmNvbSIsInRpbWVzdGFtcCI6MTU1NzMzNTE5MS4yNDY3OTgsInRva2VuX2NyZWF0ZWQiOjE1NTg1MzIxMjIuMTUyMjU2fQ.x0ESd0jMzJezLvMscKeK913VGB7NzWU6MsTKEPleaSI",
        userId: "77b7c335-c802-4b99-98e7-c94fc7755934",
    };  // TODO: Improve auth !!!!
  }
  
  export(formatType, trackExportMethod, nightMode, fullscreen, startExportingProcess, finishExportingProcess) {
      startExportingProcess();
      const { token, userId } = this.state;
      let { text } = this.props;
        fetch(`https://ebook-dot-squiblerproduction.appspot.com/convert`, {
            method: 'post',
            headers: {
              'Authorization': `JWT ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                html_content: text,
                format_type: formatType,
                user_id: userId
            })
        })
        .then((result) => result.blob())
        .then(
        (result) => {
            FileSaver.saveAs(result, `result.${formatType}`);
            trackExportMethod({
              format: formatType,
              fullscreen: fullscreen,
              nightMode: nightMode,
              exportFromPage: this.props.fromPage
            });
            finishExportingProcess();
        },
        (error) => {
            console.log(error);
            this.download(formatType);
            finishExportingProcess();
        }
        )
  }

  download (formatType) {
    const firstLine = this.props.text.replace(/[",.!-::']/g , "");
    const length = firstLine.indexOf(" ", 25);
    const title = firstLine.substr(0, length > 0 ? length : 30);
    const date = new Date().toLocaleDateString();
    // Replace clean newlines with windows evil
    const text = this.props.text.replace(/([^\r])\n/g, "$1\r\n");
    const blob = new Blob([text], {type: "text/plain;charset=utf-8"});
    const filename = `${title} (MDWA ${date}).${formatType}`;
    FileSaver.saveAs(blob, filename);
  }

  render() {
    const { center, white } = this.state;
    const appClass = classNames('export-box export-type mb-4', {
        'center': center,
        'white': white
      });

    if (center)
      return (
        <AppContext.Consumer>{({
          trackExport, nightMode, fullscreen,
          startExportingProcess, finishExportingProcess
        }) =>
          <div className={appClass} onClick={() => this.export('docx', trackExport, nightMode, fullscreen, startExportingProcess, finishExportingProcess)}>
            <span>Export DOC</span>
            {/* <span onClick={() => this.export('pdf', trackExport, nightMode, fullscreen, startExportingProcess, finishExportingProcess)} className="export-type">PDF</span>
            <span onClick={() => this.export('txt', trackExport, nightMode, fullscreen, startExportingProcess, finishExportingProcess)} className="export-type">TXT</span>
            <span onClick={() => this.export('docx', trackExport, nightMode, fullscreen, startExportingProcess, finishExportingProcess)} className="export-type">DOC</span>
            <span onClick={() => this.export('mobi', trackExport, nightMode, fullscreen, startExportingProcess, finishExportingProcess)} className="export-type">KINDLE</span> */}
          </div>
        }
        </AppContext.Consumer>
      )
    else
      return (
        <AppContext.Consumer>{({
          trackExport, nightMode, fullscreen,
          startExportingProcess, finishExportingProcess
        }) =>
          <div className={appClass}>
            <span onClick={() => this.export('pdf', trackExport, nightMode, fullscreen, startExportingProcess, finishExportingProcess)} className="export-type">PDF</span>
            <span onClick={() => this.export('txt', trackExport, nightMode, fullscreen, startExportingProcess, finishExportingProcess)} className="export-type">TXT</span>
            <span onClick={() => this.export('docx', trackExport, nightMode, fullscreen, startExportingProcess, finishExportingProcess)} className="export-type">DOC</span>
            <span onClick={() => this.export('mobi', trackExport, nightMode, fullscreen, startExportingProcess, finishExportingProcess)} className="export-type">KINDLE</span>
          </div>
        }
        </AppContext.Consumer>
      )
  }
}
