# WDI_TEAM_PROJECT
Team Byte Project

ISSUES

- pendingTeamMembers and activeTeamMembers shouldn't be required fields
in the project schema. CHANGED
- requiredTeamMembers in the Project Schema should be amended to object rather than a link to a mongoose ID. CHANGED
- login and register controllers expect different req body structures:
{ freelancer: {                {
  //information         VS       //information
  }}                            }
- Not sure that error handling is correct in register controller. - THIS HAS BEEN CHANGED SO THAT THE ERROR MESSAGE IS CLEARER. 
- Project not Projects in freelancer model - CHANGED
- deadLine to deadline in project controller - AS PER THE BELOW, CHANGED TO TIMEFRAME


WIREFRAME DISCUSSION

- Deadline vs timeframe - THIS HAS BEEN CHANGED TO TIMEFRAME
- budget sliders
- project show and user show need more info
