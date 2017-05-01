namespace graph {

  export class alternativeSecurityId {
    type: number;
    identityProvider: string;
    key: any;
  }

  export class licenseUnitsDetail {
    enabled: number;
    suspended: number;
    warning: number;
  }

  export class servicePlanInfo {
    servicePlanId: any;
    servicePlanName: string;
    provisioningStatus: string;
    appliesTo: string;
  }

  export class assignedPlan {
    assignedDateTime: any;
    capabilityStatus: string;
    service: string;
    servicePlanId: any;
  }

  export class provisionedPlan {
    capabilityStatus: string;
    provisioningStatus: string;
    service: string;
  }

  export class verifiedDomain {
    capabilities: string;
    isDefault: boolean;
    isInitial: boolean;
    name: string;
    type: string;
  }

  export class assignedLicense {
    disabledPlans: any;
    skuId: any;
  }

  export class passwordProfile {
    password: string;
    forceChangePasswordNextSignIn: boolean;
  }

  export class mailboxSettings {
    automaticRepliesSetting: graph.automaticRepliesSetting;
    timeZone: string;
    language: graph.localeInfo;
  }

  export class automaticRepliesSetting {
    status: graph.automaticRepliesStatus;
    externalAudience: graph.externalAudienceScope;
    scheduledStartDateTime: graph.dateTimeTimeZone;
    scheduledEndDateTime: graph.dateTimeTimeZone;
    internalReplyMessage: string;
    externalReplyMessage: string;
  }

  export class dateTimeTimeZone {
    dateTime: string;
    timeZone: string;
  }

  export class localeInfo {
    locale: string;
    displayName: string;
  }

  export class recipient {
    emailAddress: graph.emailAddress;
  }

  export class emailAddress {
    name: string;
    address: string;
  }

  export class attendeeBase extends recipient {
    type: graph.attendeeType;
  }

  export class meetingTimeSuggestionsResult {
    meetingTimeSuggestions: any;
    emptySuggestionsReason: string;
  }

  export class meetingTimeSuggestion {
    meetingTimeSlot: graph.timeSlot;
    confidence: any;
    organizerAvailability: graph.freeBusyStatus;
    attendeeAvailability: any;
    locations: any;
    suggestionReason: string;
  }

  export class timeSlot {
    start: graph.dateTimeTimeZone;
    end: graph.dateTimeTimeZone;
  }

  export class attendeeAvailability {
    attendee: graph.attendeeBase;
    availability: graph.freeBusyStatus;
  }

  export class location {
    displayName: string;
    locationEmailAddress: string;
    address: graph.physicalAddress;
  }

  export class physicalAddress {
    street: string;
    city: string;
    state: string;
    countryOrRegion: string;
    postalCode: string;
  }

  export class locationConstraint {
    isRequired: boolean;
    suggestLocation: boolean;
    locations: any;
  }

  export class locationConstraintItem extends location {
    resolveAvailability: boolean;
  }

  export class timeConstraint {
    activityDomain: graph.activityDomain;
    timeslots: any;
  }

  export class reminder {
    eventId: string;
    eventStartTime: graph.dateTimeTimeZone;
    eventEndTime: graph.dateTimeTimeZone;
    changeKey: string;
    eventSubject: string;
    eventLocation: graph.location;
    eventWebLink: string;
    reminderFireTime: graph.dateTimeTimeZone;
  }

  export class itemBody {
    contentType: graph.bodyType;
    content: string;
  }

  export class responseStatus {
    response: graph.responseType;
    time: any;
  }

  export class patternedRecurrence {
    pattern: graph.recurrencePattern;
    range: graph.recurrenceRange;
  }

  export class recurrencePattern {
    type: graph.recurrencePatternType;
    interval: number;
    month: number;
    dayOfMonth: number;
    daysOfWeek: any;
    firstDayOfWeek: graph.dayOfWeek;
    index: graph.weekIndex;
  }

  export class recurrenceRange {
    type: graph.recurrenceRangeType;
    startDate: any;
    endDate: any;
    recurrenceTimeZone: string;
    numberOfOccurrences: number;
  }

  export class attendee extends attendeeBase {
    status: graph.responseStatus;
  }

  export class identitySet {
    application: graph.identity;
    device: graph.identity;
    user: graph.identity;
  }

  export class identity {
    displayName: string;
    id: string;
  }

  export class quota {
    deleted: any;
    remaining: any;
    state: string;
    total: any;
    used: any;
  }

  export class audio {
    album: string;
    albumArtist: string;
    artist: string;
    bitrate: any;
    composers: string;
    copyright: string;
    disc: any;
    discCount: any;
    duration: any;
    genre: string;
    hasDrm: boolean;
    isVariableBitrate: boolean;
    title: string;
    track: number;
    trackCount: number;
    year: number;
  }

  export class deleted {
    state: string;
  }

  export class file {
    hashes: graph.hashes;
    mimeType: string;
    processingMetadata: boolean;
  }

  export class hashes {
    crc32Hash: string;
    sha1Hash: string;
    quickXorHash: string;
  }

  export class fileSystemInfo {
    createdDateTime: any;
    lastModifiedDateTime: any;
  }

  export class folder {
    childCount: number;
  }

  export class image {
    height: number;
    width: number;
  }

  export class geoCoordinates {
    altitude: any;
    latitude: any;
    longitude: any;
  }

  export class Package {
    type: string;
  }

  export class itemReference {
    driveId: string;
    id: string;
    name: string;
    path: string;
    shareId: string;
  }

  export class photo {
    cameraMake: string;
    cameraModel: string;
    exposureDenominator: any;
    exposureNumerator: any;
    focalLength: any;
    fNumber: any;
    takenDateTime: any;
    iso: number;
  }

  export class remoteItem {
    createdBy: graph.identitySet;
    createdDateTime: any;
    file: graph.file;
    fileSystemInfo: graph.fileSystemInfo;
    folder: graph.folder;
    id: string;
    lastModifiedBy: graph.identitySet;
    lastModifiedDateTime: any;
    name: string;
    package: Package;
    parentReference: graph.itemReference;
    sharepointIds: graph.sharepointIds;
    size: any;
    specialFolder: graph.specialFolder;
    webDavUrl: string;
    webUrl: string;
  }

  export class sharepointIds {
    listId: string;
    listItemId: string;
    listItemUniqueId: string;
    siteId: string;
    webId: string;
  }

  export class specialFolder {
    name: string;
  }

  export class root {
  }

  export class searchResult {
    onClickTelemetryUrl: string;
  }

  export class shared {
    owner: graph.identitySet;
    scope: string;
  }

  export class video {
    bitrate: number;
    duration: any;
    height: number;
    width: number;
  }

  export class sharingInvitation {
    email: string;
    invitedBy: graph.identitySet;
    redeemedBy: string;
    signInRequired: boolean;
  }

  export class sharingLink {
    application: graph.identity;
    type: string;
    scope: string;
    webUrl: string;
  }

  export class thumbnail {
    content: any;
    height: number;
    url: string;
    width: number;
  }

  export class driveRecipient {
    email: string;
    alias: string;
    objectId: string;
  }

  export class driveItemUploadableProperties {
    name: string;
    description: string;
    fileSystemInfo: graph.fileSystemInfo;
  }

  export class uploadSession {
    uploadUrl: string;
    expirationDateTime: any;
    nextExpectedRanges: any;
  }

  export class workbookSessionInfo {
    id: string;
    persistChanges: boolean;
  }

  export class Json {
  }

  export class workbookFilterCriteria {
    color: string;
    criterion1: string;
    criterion2: string;
    dynamicCriteria: string;
    filterOn: string;
    icon: graph.workbookIcon;
    operator: string;
    values: graph.Json;
  }

  export class workbookIcon {
    index: number;
    set: string;
  }

  export class workbookSortField {
    ascending: boolean;
    color: string;
    dataOption: string;
    icon: graph.workbookIcon;
    key: number;
    sortOn: string;
  }

  export class workbookWorksheetProtectionOptions {
    allowAutoFilter: boolean;
    allowDeleteColumns: boolean;
    allowDeleteRows: boolean;
    allowFormatCells: boolean;
    allowFormatColumns: boolean;
    allowFormatRows: boolean;
    allowInsertColumns: boolean;
    allowInsertHyperlinks: boolean;
    allowInsertRows: boolean;
    allowPivotTables: boolean;
    allowSort: boolean;
  }

  export class workbookFilterDatetime {
    date: string;
    specificity: string;
  }

  export class workbookRangeReference {
    address: string;
  }

  export class invitedUserMessageInfo {
    ccRecipients: any;
    messageLanguage: string;
    customizedMessageBody: string;
  }


}
