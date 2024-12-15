const PrivacyPolicy = () => {
  return (
    <>
      <style>
        {`
          [data-custom-class='body'], [data-custom-class='body'] * {
            background: transparent !important;
          }
          [data-custom-class='title'], [data-custom-class='title'] * {
            font-family: Arial !important;
            font-size: 26px !important;
            color: #000000 !important;
          }
          [data-custom-class='subtitle'], [data-custom-class='subtitle'] * {
            font-family: Arial !important;
            color: #595959 !important;
            font-size: 14px !important;
          }
          [data-custom-class='heading_1'], [data-custom-class='heading_1'] * {
            font-family: Arial !important;
            font-size: 19px !important;
            color: #000000 !important;
          }
          [data-custom-class='heading_2'], [data-custom-class='heading_2'] * {
            font-family: Arial !important;
            font-size: 17px !important;
            color: #000000 !important;
          }
          [data-custom-class='body_text'], [data-custom-class='body_text'] * {
            color: #595959 !important;
            font-size: 14px !important;
            font-family: Arial !important;
          }
          [data-custom-class='link'], [data-custom-class='link'] * {
            color: #3030F1 !important;
            font-size: 14px !important;
            font-family: Arial !important;
            word-break: break-word !important;
          }
        `}
      </style>

      <span
        style={{
          display: "block",
          margin: "0 auto 3.125rem",
          width: "11.125rem",
          height: "2.375rem",
          background: "url(data:image/svg+xml;base64,[your-base64-logo])" // Add your logo
        }}
      />

      <div data-custom-class="body">
        <div>
          <strong>
            <span style={{ fontSize: "26px" }}>
              <span data-custom-class="title">
                PRIVACY POLICY
              </span>
            </span>
          </strong>
        </div>

        <div><br /></div>

        <div>
          <span style={{ color: "rgb(127, 127, 127)" }}>
            <strong>
              <span style={{ fontSize: "15px" }}>
                <span data-custom-class="subtitle">
                  Last updated December 14, 2024
                </span>
              </span>
            </strong>
          </span>
        </div>

        {/* Continue formatting remaining content sections */}
      </div>
    </>
  );
};

export default PrivacyPolicy;

