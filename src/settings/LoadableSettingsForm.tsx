import React from "react";
import axios from "axios";

import { LoadableView } from "../common/Loadable";
import { FieldType } from "./fields/allFields";
import { SimpleForm } from "./SimpleForm";

interface Settings {
  jira_server_url: string;
  jira_email: string;
  jira_api_key: string;
}

const getSettings = async () => {
  const response = await axios.get<Settings>("/api/settings/");
  return response.data;
};

const putSettings = async (settings: Settings) => {
  const response = await axios.put<Settings>("/api/settings/", settings);
  return response.data;
};

const SettingsForm: React.FC<Settings> = (initial: Settings) => {
  const [selectedJiraServerUrl, setSelectedJiraServerUrl] =
    React.useState<string>(initial.jira_server_url);
  const [selectedJiraEmail, setSelectedJiraEmail] = React.useState<string>(
    initial.jira_email
  );
  const [selectedJiraApiKey, setSelectedJiraApiKey] = React.useState<string>(
    initial.jira_api_key
  );

  return (
    <>
      <h2>Settings</h2>
      <SimpleForm
        fields={[
          {
            type: FieldType.TEXT,
            id: "jira-server-url",
            label: "JIRA Server URL",
            value: selectedJiraServerUrl,
            setValue: setSelectedJiraServerUrl,
          },
          {
            type: FieldType.TEXT,
            id: "jira-email",
            label: "JIRA Email",
            value: selectedJiraEmail,
            setValue: setSelectedJiraEmail,
          },
          {
            type: FieldType.TEXT,
            id: "jira-api-key",
            label: "JIRA API Key",
            value: selectedJiraApiKey,
            setValue: setSelectedJiraApiKey,
          },
        ]}
        onSave={async () => {
          const updatedSettings = await putSettings({
            jira_server_url: selectedJiraServerUrl,
            jira_email: selectedJiraEmail,
            jira_api_key: selectedJiraApiKey,
          });
          setSelectedJiraServerUrl(updatedSettings.jira_server_url);
          setSelectedJiraEmail(updatedSettings.jira_email);
          setSelectedJiraApiKey(updatedSettings.jira_api_key);
        }}
      />
    </>
  );
};

export const LoadableSettingsForm: React.FC = () => (
  <LoadableView getProps={getSettings} component={SettingsForm} />
);
