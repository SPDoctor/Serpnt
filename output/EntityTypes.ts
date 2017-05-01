namespace graph {

  export class entity { id: string; }

  export class directoryObject extends entity {
  }

  export class device extends directoryObject {
    accountEnabled: boolean;
    alternativeSecurityIds: any;
    approximateLastSignInDateTime: any;
    deviceId: string;
    deviceMetadata: string;
    deviceVersion: number;
    displayName: string;
    isCompliant: boolean;
    isManaged: boolean;
    onPremisesLastSyncDateTime: any;
    onPremisesSyncEnabled: boolean;
    operatingSystem: string;
    operatingSystemVersion: string;
    physicalIds: any;
    trustType: string;
  }

  export class directoryRole extends directoryObject {
    description: string;
    displayName: string;
    roleTemplateId: string;
  }

  export class directoryRoleTemplate extends directoryObject {
    description: string;
    displayName: string;
  }

  export class group extends directoryObject {
    description: string;
    displayName: string;
    groupTypes: any;
    mail: string;
    mailEnabled: boolean;
    mailNickname: string;
    onPremisesLastSyncDateTime: any;
    onPremisesSecurityIdentifier: string;
    onPremisesSyncEnabled: boolean;
    proxyAddresses: any;
    securityEnabled: boolean;
    visibility: string;
    allowExternalSenders: boolean;
    autoSubscribeNewMembers: boolean;
    isSubscribedByMail: boolean;
    unseenCount: number;
  }

  export class conversationThread extends entity {
    toRecipients: any;
    topic: string;
    hasAttachments: boolean;
    lastDeliveredDateTime: any;
    uniqueSenders: any;
    ccRecipients: any;
    preview: string;
    isLocked: boolean;
  }

  export class calendar extends entity {
    name: string;
    color: graph.calendarColor;
    changeKey: string;
  }

  export class outlookItem extends entity {
    createdDateTime: any;
    lastModifiedDateTime: any;
    changeKey: string;
    categories: any;
  }

  export class event extends outlookItem {
    originalStartTimeZone: string;
    originalEndTimeZone: string;
    responseStatus: graph.responseStatus;
    iCalUId: string;
    reminderMinutesBeforeStart: number;
    isReminderOn: boolean;
    hasAttachments: boolean;
    subject: string;
    body: graph.itemBody;
    bodyPreview: string;
    importance: graph.importance;
    sensitivity: graph.sensitivity;
    start: graph.dateTimeTimeZone;
    originalStart: any;
    end: graph.dateTimeTimeZone;
    location: graph.location;
    isAllDay: boolean;
    isCancelled: boolean;
    isOrganizer: boolean;
    recurrence: graph.patternedRecurrence;
    responseRequested: boolean;
    seriesMasterId: string;
    showAs: graph.freeBusyStatus;
    type: graph.eventType;
    attendees: any;
    organizer: graph.recipient;
    webLink: string;
    onlineMeetingUrl: string;
  }

  export class conversation extends entity {
    topic: string;
    hasAttachments: boolean;
    lastDeliveredDateTime: any;
    uniqueSenders: any;
    preview: string;
  }

  export class profilePhoto extends entity {
    height: number;
    width: number;
  }

  export class drive extends entity {
    driveType: string;
    owner: graph.identitySet;
    quota: graph.quota;
  }

  export class subscribedSku extends entity {
    capabilityStatus: string;
    consumedUnits: number;
    prepaidUnits: graph.licenseUnitsDetail;
    servicePlans: any;
    skuId: any;
    skuPartNumber: string;
    appliesTo: string;
  }

  export class organization extends directoryObject {
    assignedPlans: any;
    businessPhones: any;
    city: string;
    country: string;
    countryLetterCode: string;
    displayName: string;
    marketingNotificationEmails: any;
    onPremisesLastSyncDateTime: any;
    onPremisesSyncEnabled: boolean;
    postalCode: string;
    preferredLanguage: string;
    provisionedPlans: any;
    securityComplianceNotificationMails: any;
    securityComplianceNotificationPhones: any;
    state: string;
    street: string;
    technicalNotificationMails: any;
    verifiedDomains: any;
  }

  export class user extends directoryObject {
    accountEnabled: boolean;
    assignedLicenses: any;
    assignedPlans: any;
    businessPhones: any;
    city: string;
    companyName: string;
    country: string;
    department: string;
    displayName: string;
    givenName: string;
    jobTitle: string;
    mail: string;
    mailNickname: string;
    mobilePhone: string;
    onPremisesImmutableId: string;
    onPremisesLastSyncDateTime: any;
    onPremisesSecurityIdentifier: string;
    onPremisesSyncEnabled: boolean;
    passwordPolicies: string;
    passwordProfile: graph.passwordProfile;
    officeLocation: string;
    postalCode: string;
    preferredLanguage: string;
    provisionedPlans: any;
    proxyAddresses: any;
    state: string;
    streetAddress: string;
    surname: string;
    usageLocation: string;
    userPrincipalName: string;
    userType: string;
    mailboxSettings: graph.mailboxSettings;
    aboutMe: string;
    birthday: any;
    hireDate: any;
    interests: any;
    mySite: string;
    pastProjects: any;
    preferredName: string;
    responsibilities: any;
    schools: any;
    skills: any;
  }

  export class message extends outlookItem {
    receivedDateTime: any;
    sentDateTime: any;
    hasAttachments: boolean;
    internetMessageId: string;
    subject: string;
    body: graph.itemBody;
    bodyPreview: string;
    importance: graph.importance;
    parentFolderId: string;
    sender: graph.recipient;
    from: graph.recipient;
    toRecipients: any;
    ccRecipients: any;
    bccRecipients: any;
    replyTo: any;
    conversationId: string;
    uniqueBody: graph.itemBody;
    isDeliveryReceiptRequested: boolean;
    isReadReceiptRequested: boolean;
    isRead: boolean;
    isDraft: boolean;
    webLink: string;
    inferenceClassification: graph.inferenceClassificationType;
  }

  export class mailFolder extends entity {
    displayName: string;
    parentFolderId: string;
    childFolderCount: number;
    unreadItemCount: number;
    totalItemCount: number;
  }

  export class calendarGroup extends entity {
    name: string;
    classId: any;
    changeKey: string;
  }

  export class contact extends outlookItem {
    parentFolderId: string;
    birthday: any;
    fileAs: string;
    displayName: string;
    givenName: string;
    initials: string;
    middleName: string;
    nickName: string;
    surname: string;
    title: string;
    yomiGivenName: string;
    yomiSurname: string;
    yomiCompanyName: string;
    generation: string;
    emailAddresses: any;
    imAddresses: any;
    jobTitle: string;
    companyName: string;
    department: string;
    officeLocation: string;
    profession: string;
    businessHomePage: string;
    assistantName: string;
    manager: string;
    homePhones: any;
    mobilePhone: string;
    businessPhones: any;
    homeAddress: graph.physicalAddress;
    businessAddress: graph.physicalAddress;
    otherAddress: graph.physicalAddress;
    spouseName: string;
    personalNotes: string;
    children: any;
  }

  export class contactFolder extends entity {
    parentFolderId: string;
    displayName: string;
  }

  export class inferenceClassification extends entity {
  }

  export class attachment extends entity {
    lastModifiedDateTime: any;
    name: string;
    contentType: string;
    size: number;
    isInline: boolean;
  }

  export class singleValueLegacyExtendedProperty extends entity {
    value: string;
  }

  export class multiValueLegacyExtendedProperty extends entity {
    value: any;
  }

  export class extension extends entity {
  }

  export class fileAttachment extends attachment {
    contentId: string;
    contentLocation: string;
    contentBytes: any;
  }

  export class itemAttachment extends attachment {
  }

  export class eventMessage extends message {
    meetingMessageType: graph.meetingMessageType;
  }

  export class referenceAttachment extends attachment {
  }

  export class openTypeExtension extends extension {
    extensionName: string;
  }

  export class post extends outlookItem {
    body: graph.itemBody;
    receivedDateTime: any;
    hasAttachments: boolean;
    from: graph.recipient;
    sender: graph.recipient;
    conversationThreadId: string;
    newParticipants: any;
    conversationId: string;
  }

  export class inferenceClassificationOverride extends entity {
    classifyAs: graph.inferenceClassificationType;
    senderEmailAddress: graph.emailAddress;
  }

  export class driveItem extends entity {
    createdBy: graph.identitySet;
    createdDateTime: any;
    description: string;
    eTag: string;
    lastModifiedBy: graph.identitySet;
    lastModifiedDateTime: any;
    name: string;
    webUrl: string;
    audio: graph.audio;
    content: any;
    cTag: string;
    deleted: graph.deleted;
    file: graph.file;
    fileSystemInfo: graph.fileSystemInfo;
    folder: graph.folder;
    image: graph.image;
    location: graph.geoCoordinates;
    package: Package;
    parentReference: graph.itemReference;
    photo: graph.photo;
    remoteItem: graph.remoteItem;
    root: graph.root;
    searchResult: graph.searchResult;
    shared: graph.shared;
    sharepointIds: graph.sharepointIds;
    size: any;
    specialFolder: graph.specialFolder;
    video: graph.video;
    webDavUrl: string;
  }

  export class workbook extends entity {
  }

  export class permission extends entity {
    grantedTo: graph.identitySet;
    invitation: graph.sharingInvitation;
    inheritedFrom: graph.itemReference;
    link: graph.sharingLink;
    roles: any;
    shareId: string;
  }

  export class thumbnailSet extends entity {
    large: graph.thumbnail;
    medium: graph.thumbnail;
    small: graph.thumbnail;
    source: graph.thumbnail;
  }

  export class sharedDriveItem extends entity {
    name: string;
    owner: graph.identitySet;
  }

  export class sharePoint extends entity {
  }

  export class site extends entity {
  }

  export class list extends entity {
  }

  export class workbookApplication extends entity {
    calculationMode: string;
  }

  export class workbookNamedItem extends entity {
    comment: string;
    name: string;
    scope: string;
    type: string;
    value: graph.Json;
    visible: boolean;
  }

  export class workbookTable extends entity {
    highlightFirstColumn: boolean;
    highlightLastColumn: boolean;
    name: string;
    showBandedColumns: boolean;
    showBandedRows: boolean;
    showFilterButton: boolean;
    showHeaders: boolean;
    showTotals: boolean;
    style: string;
  }

  export class workbookWorksheet extends entity {
    name: string;
    position: number;
    visibility: string;
  }

  export class workbookFunctions extends entity {
  }

  export class workbookChart extends entity {
    height: any;
    left: any;
    name: string;
    top: any;
    width: any;
  }

  export class workbookChartAxes extends entity {
  }

  export class workbookChartDataLabels extends entity {
    position: string;
    separator: string;
    showBubbleSize: boolean;
    showCategoryName: boolean;
    showLegendKey: boolean;
    showPercentage: boolean;
    showSeriesName: boolean;
    showValue: boolean;
  }

  export class workbookChartAreaFormat extends entity {
  }

  export class workbookChartLegend extends entity {
    overlay: boolean;
    position: string;
    visible: boolean;
  }

  export class workbookChartSeries extends entity {
    name: string;
  }

  export class workbookChartTitle extends entity {
    overlay: boolean;
    text: string;
    visible: boolean;
  }

  export class workbookChartFill extends entity {
  }

  export class workbookChartFont extends entity {
    bold: boolean;
    color: string;
    italic: boolean;
    name: string;
    size: any;
    underline: string;
  }

  export class workbookChartAxis extends entity {
    majorUnit: graph.Json;
    maximum: graph.Json;
    minimum: graph.Json;
    minorUnit: graph.Json;
  }

  export class workbookChartAxisFormat extends entity {
  }

  export class workbookChartGridlines extends entity {
    visible: boolean;
  }

  export class workbookChartAxisTitle extends entity {
    text: string;
    visible: boolean;
  }

  export class workbookChartLineFormat extends entity {
    color: string;
  }

  export class workbookChartAxisTitleFormat extends entity {
  }

  export class workbookChartDataLabelFormat extends entity {
  }

  export class workbookChartGridlinesFormat extends entity {
  }

  export class workbookChartLegendFormat extends entity {
  }

  export class workbookChartPoint extends entity {
    value: graph.Json;
  }

  export class workbookChartPointFormat extends entity {
  }

  export class workbookChartSeriesFormat extends entity {
  }

  export class workbookChartTitleFormat extends entity {
  }

  export class workbookFilter extends entity {
    criteria: graph.workbookFilterCriteria;
  }

  export class workbookFormatProtection extends entity {
    formulaHidden: boolean;
    locked: boolean;
  }

  export class workbookFunctionResult extends entity {
    error: string;
    value: graph.Json;
  }

  export class workbookPivotTable extends entity {
    name: string;
  }

  export class workbookRange extends entity {
    address: string;
    addressLocal: string;
    cellCount: number;
    columnCount: number;
    columnHidden: boolean;
    columnIndex: number;
    formulas: graph.Json;
    formulasLocal: graph.Json;
    formulasR1C1: graph.Json;
    hidden: boolean;
    numberFormat: graph.Json;
    rowCount: number;
    rowHidden: boolean;
    rowIndex: number;
    text: graph.Json;
    valueTypes: graph.Json;
    values: graph.Json;
  }

  export class workbookRangeFormat extends entity {
    columnWidth: any;
    horizontalAlignment: string;
    rowHeight: any;
    verticalAlignment: string;
    wrapText: boolean;
  }

  export class workbookRangeSort extends entity {
  }

  export class workbookRangeBorder extends entity {
    color: string;
    sideIndex: string;
    style: string;
    weight: string;
  }

  export class workbookRangeFill extends entity {
    color: string;
  }

  export class workbookRangeFont extends entity {
    bold: boolean;
    color: string;
    italic: boolean;
    name: string;
    size: any;
    underline: string;
  }

  export class workbookRangeView extends entity {
    cellAddresses: graph.Json;
    columnCount: number;
    formulas: graph.Json;
    formulasLocal: graph.Json;
    formulasR1C1: graph.Json;
    index: number;
    numberFormat: graph.Json;
    rowCount: number;
    text: graph.Json;
    valueTypes: graph.Json;
    values: graph.Json;
  }

  export class workbookTableColumn extends entity {
    index: number;
    name: string;
    values: graph.Json;
  }

  export class workbookTableRow extends entity {
    index: number;
    values: graph.Json;
  }

  export class workbookTableSort extends entity {
    fields: any;
    matchCase: boolean;
    method: string;
  }

  export class workbookWorksheetProtection extends entity {
    options: graph.workbookWorksheetProtectionOptions;
    protected: boolean;
  }

  export class subscription extends entity {
    resource: string;
    changeType: string;
    clientState: string;
    notificationUrl: string;
    expirationDateTime: any;
  }

  export class invitation extends entity {
    invitedUserDisplayName: string;
    invitedUserType: string;
    invitedUserEmailAddress: string;
    invitedUserMessageInfo: graph.invitedUserMessageInfo;
    sendInvitationMessage: boolean;
    inviteRedirectUrl: string;
    inviteRedeemUrl: string;
    status: string;
  }


}
