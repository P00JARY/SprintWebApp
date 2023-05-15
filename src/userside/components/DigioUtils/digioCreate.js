
export const digioCreate = (documentId, email) => {
    return new Promise((resolve, reject) => {
        const digoOptions = {
            is_iframe: true,
        };

        digoOptions.callback = (_digio) => {
            if (_digio.error_code === "CANCELLED") {
                console.log("Flow cancelled by user");
                return;
            }
            if (_digio.error_code !== undefined) {
                throw new Error(_digio.message);
            }

            console.log(_digio);
            if (_digio.message === "Signed Successfully") {
                resolve(_digio)
            } else {
                reject(_digio)
            }
        };

        const digio = new window.Digio(digoOptions);
        digio.init();
        digio.submit(documentId, email);
    })

}