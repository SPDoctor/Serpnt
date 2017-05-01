namespace graph {

  export enum automaticRepliesStatus {
    disabled = 0,
    alwaysEnabled = 1,
    scheduled = 2
  }

  export enum externalAudienceScope {
    none = 0,
    contactsOnly = 1,
    all = 2
  }

  export enum attendeeType {
    required = 0,
    optional = 1,
    resource = 2
  }

  export enum freeBusyStatus {
    free = 0,
    tentative = 1,
    busy = 2,
    oof = 3,
    workingElsewhere = 4,
    unknown = -1
  }

  export enum activityDomain {
    unknown = 0,
    work = 1,
    personal = 2
  }

  export enum bodyType {
    text = 0,
    html = 1
  }

  export enum importance {
    low = 0,
    normal = 1,
    high = 2
  }

  export enum inferenceClassificationType {
    focused = 0,
    other = 1
  }

  export enum calendarColor {
    lightBlue = 0,
    lightGreen = 1,
    lightOrange = 2,
    lightGray = 3,
    lightYellow = 4,
    lightTeal = 5,
    lightPink = 6,
    lightBrown = 7,
    lightRed = 8,
    maxColor = 9,
    auto = -1
  }

  export enum responseType {
    none = 0,
    organizer = 1,
    tentativelyAccepted = 2,
    accepted = 3,
    declined = 4,
    notResponded = 5
  }

  export enum sensitivity {
    normal = 0,
    personal = 1,
    private = 2,
    confidential = 3
  }

  export enum recurrencePatternType {
    daily = 0,
    weekly = 1,
    absoluteMonthly = 2,
    relativeMonthly = 3,
    absoluteYearly = 4,
    relativeYearly = 5
  }

  export enum dayOfWeek {
    sunday = 0,
    monday = 1,
    tuesday = 2,
    wednesday = 3,
    thursday = 4,
    friday = 5,
    saturday = 6
  }

  export enum weekIndex {
    first = 0,
    second = 1,
    third = 2,
    fourth = 3,
    last = 4
  }

  export enum recurrenceRangeType {
    endDate = 0,
    noEnd = 1,
    numbered = 2
  }

  export enum eventType {
    singleInstance = 0,
    occurrence = 1,
    exception = 2,
    seriesMaster = 3
  }

  export enum meetingMessageType {
    none = 0,
    meetingRequest = 1,
    meetingCancelled = 2,
    meetingAccepted = 3,
    meetingTenativelyAccepted = 4,
    meetingDeclined = 5
  }


}
