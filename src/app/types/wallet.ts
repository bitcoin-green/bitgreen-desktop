export interface IOverviewBalance {
  totalBalance: Number;
  availableBalance: Number;
  unconfirmedBalance: Number;
  lockedBalance: Number;
  incomingValue: Number;
  incomingTotal: Number;
  outgoingValue: Number;
  outgoingTotal: Number;
}

export interface ITransaction {
  id: String;
  value: Number;
  timestamp: Number;
  timeStr: String;
}

export interface ISpotLight {
  title: String;
  percent: Number;
}

export interface IArticle {
  img: String;
  title: String;
  level: String;
  timestamp: Number;
  timeStr: String;
}
