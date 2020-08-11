export const getShiftData = async () => {
    const result = await fetch(
        "https://vvgv5rubu3.execute-api.eu-west-2.amazonaws.com/dev/sessions"
    );

    return result.json();
};
