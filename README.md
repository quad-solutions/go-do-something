# GO DO SOMETHING

This is the repository for the popular website https://go-do-something.com

Thank you for stopping by. If you encountered any problems, feel free to open an issue. If you want to contribute, please take a look at the contribute section below.

# Contribute

You want to add another thing to do? Easy!

1. Fork the project

2. Go into `/src/_activities.js`.

3. You will find an array of activities. Just append an activity at the end with the following structure:
```
{
    name: 'ACTIVITY NAME',
    type: ['friends', 'single', 'couple', 'group', 'date', 'meet'],
    tags: ['outdoor', 'indoor', 'eat', 'drinks', 'sport', 'entertainment', ]
},
```
Just remove all types/tags that are not fitting to your activity.

4. Go into `/src/_i18n.js`. All translations are stored here.

5. Append the translation of your activity name for each language.

6. Push it to github and create a pull request. :)

STUCK? Just hit me up with a PM and I will help you. :)

# License

Copyright 2019 Quad Solutions

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.