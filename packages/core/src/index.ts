import { testModule } from '@vorm/server'

export type Narrow<T> = {
  fields: string[]
  options: {
    destination: T
    limit: '1' | '3' | '5'
  }
}

type TimeoutOptions = '300' | '500'

type AdapterConstructor = {
  connUrl: string
  timeOut?: TimeoutOptions
}

class Adapter {
  private _connUrl: string

  constructor({ connUrl, timeOut }: AdapterConstructor) {
    this._connUrl = connUrl

    if (!!timeOut) {
      this._connUrl = `${this._connUrl}?timeout=${timeOut}`
    }
  }
}
