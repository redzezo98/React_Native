const getImageFromCamera = async () => {
    if (Platform.OS === 'android') {
      try {
        await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        ])
  
        const permissionCamera = await PermissionsAndroid.check('android.permission.CAMERA')
        const permissionWriteStorage = await PermissionsAndroid.check('android.permission.WRITE_EXTERNAL_STORAGE')
  
        if (!permissionCamera || !permissionWriteStorage) {
          return {
            error: 'Failed to get the required permissions.'
          }
        }
      } catch (error) {
        return {
          error: 'Failed to get the required permissions.'
        }
      }
    }
    return ImagePicker.launchCamera(options, response => response)
  }

  export {getImageFromCamera}