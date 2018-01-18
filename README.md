# spring18-recordEditForm-inputField

This repo showcases a custom Lightning component that uses lightning:recordEditForm and lightning:inputField, introduced by Salesforce with Spring '18.

Read more about it in this [blog post](https://developer.salesforce.com/blogs/2018/01/spring-18-developers-build-secure-interactive-forms-faster.html).

## Installation

Clone the repo to your local file system.

```
git clone https://github.com/muenzpraeger/spring18-recordEditForm-inputField
```

Change into the git repo directory and create a new scratch org

```
sfdx force:org:create -a inputField -s -f config/project-scratch-def.json
```

Push the source to the newly created org.
```
sfdx force:source:push
```

Open the scratch org.

```
sfdx force:org:open
```