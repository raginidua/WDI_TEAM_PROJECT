# WDI_TEAM_PROJECT
Team Byte Project

ISSUES

- pendingTeamMembers and activeTeamMembers shouldn't be required fields
in the project schema.
- login and register controllers expect different req body structures:
{ freelancer: {                {
  //information         VS       //information
  }}                            }
- Not sure that error handling is correct in register controller.
