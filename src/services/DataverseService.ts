import { DataverseClient } from 'js-dataverse'

const host: string = process.env.REACT_APP_DATAVERSE_HOST ? process.env.REACT_APP_DATAVERSE_HOST : ''
const apiToken: string = process.env.REACT_APP_DATAVERSE_API_TOKEN ? process.env.REACT_APP_DATAVERSE_API_TOKEN : ''
const client = new DataverseClient(host, apiToken)

export class DataverseService {
  public static async getDataverseInformation(dataverseAlias: string = 'demo') {
    return client.getDataverseInformation(dataverseAlias)
  }
}