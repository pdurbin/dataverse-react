import React from 'react'
import './App.css'
import { DataverseClient } from 'js-dataverse'
import { Button, Row } from 'react-bootstrap'

interface AppState {
  data?: any
}

class App extends React.Component<{}, AppState> {

  public constructor(props: any) {
    super(props)

    this.state = {}
  }

  public render() {
    return (
      <div className="App">
        <div className={'dataverse-container'}>
          <Button onClick={() => this.getDatasetInformation()}>Get Dataverse information</Button>
          <div className={'dataverse-response'}>{JSON.stringify(this.state.data)}</div>
        </div>
      </div>
    )
  }

  private async getDatasetInformation() {
    const host: string = process.env.REACT_APP_DATAVERSE_HOST ? process.env.REACT_APP_DATAVERSE_HOST : ''
    const apiToken: string = process.env.REACT_APP_DATAVERSE_API_TOKEN ? process.env.REACT_APP_DATAVERSE_API_TOKEN : ''
    const client = new DataverseClient(host, apiToken)
    const response = await client.getDataverseInformation('demo').catch(error => console.log(error))
    this.setState({
      data: response
    })
  }
}

export default App
