import axios, { AxiosError } from 'axios'
import { EwsH1 } from 'components/common/typography/text-components'
import { ReactNode, useEffect, useState } from 'react'
import styles from './rest-error-handler.module.css'

interface RestErrorHandlerProps<T> {
    restApiCall: () => Promise<T>,
    successCallback: (data: T) => void,
    errorCallback?: (error: AxiosError | string) => void
}

const errorPopup = (errorMessage: string): ReactNode => (
    <div className={styles.popupContainer}>
        <EwsH1>Oops, an error has occurred!</EwsH1>
        <p>{errorMessage}</p>
    </div>
)

const RestErrorHandler = <T, >({ restApiCall, successCallback, errorCallback }: RestErrorHandlerProps<T>): JSX.Element => {
    const [errorMessage, setErrorMessage] = useState<string | null>(null)

    useEffect(() => {
        restApiCall()
            .then((data) => successCallback(data))
            .catch((error) => {
                if (errorCallback !== undefined) {
                    if (axios.isAxiosError(error)) {
                        errorCallback(error)
                        setErrorMessage(error.message)
                    } else {
                        const message = JSON.stringify(error)
                        errorCallback(message)
                        setErrorMessage(message)
                    }
                }
            })
    }, [])

    return (
        <>
            { errorMessage !== null && errorPopup(errorMessage) }
        </>
    )
}

export default RestErrorHandler
