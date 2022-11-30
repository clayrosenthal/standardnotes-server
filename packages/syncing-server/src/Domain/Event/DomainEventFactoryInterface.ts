import {
  DropboxBackupFailedEvent,
  DuplicateItemSyncedEvent,
  EmailArchiveExtensionSyncedEvent,
  EmailBackupAttachmentCreatedEvent,
  GoogleDriveBackupFailedEvent,
  ItemDumpedEvent,
  ItemRevisionCreationRequestedEvent,
  ItemsSyncedEvent,
  OneDriveBackupFailedEvent,
  RevisionsCopyRequestedEvent,
  RevisionsOwnershipUpdateRequestedEvent,
  UserContentSizeRecalculationRequestedEvent,
} from '@standardnotes/domain-events'

export interface DomainEventFactoryInterface {
  createUserContentSizeRecalculationRequestedEvent(userUuid: string): UserContentSizeRecalculationRequestedEvent
  createDropboxBackupFailedEvent(muteCloudEmailsSettingUuid: string, email: string): DropboxBackupFailedEvent
  createGoogleDriveBackupFailedEvent(muteCloudEmailsSettingUuid: string, email: string): GoogleDriveBackupFailedEvent
  createOneDriveBackupFailedEvent(muteCloudEmailsSettingUuid: string, email: string): OneDriveBackupFailedEvent
  createItemsSyncedEvent(dto: {
    userUuid: string
    extensionUrl: string
    extensionId: string
    itemUuids: Array<string>
    forceMute: boolean
    skipFileBackup: boolean
    source: 'account-deletion' | 'realtime-extensions-sync'
  }): ItemsSyncedEvent
  createEmailArchiveExtensionSyncedEvent(userUuid: string, extensionId: string): EmailArchiveExtensionSyncedEvent
  createEmailBackupAttachmentCreatedEvent(dto: {
    backupFileName: string
    backupFileIndex: number
    backupFilesTotal: number
    email: string
  }): EmailBackupAttachmentCreatedEvent
  createDuplicateItemSyncedEvent(itemUuid: string, userUuid: string): DuplicateItemSyncedEvent
  createItemRevisionCreationRequested(itemUuid: string, userUuid: string): ItemRevisionCreationRequestedEvent
  createItemDumpedEvent(fileDumpPath: string, userUuid: string): ItemDumpedEvent
  createRevisionsCopyRequestedEvent(
    userUuid: string,
    dto: { originalItemUuid: string; newItemUuid: string },
  ): RevisionsCopyRequestedEvent
  createRevisionsOwnershipUpdateRequestedEvent(dto: {
    userUuid: string
    itemUuid: string
  }): RevisionsOwnershipUpdateRequestedEvent
}
