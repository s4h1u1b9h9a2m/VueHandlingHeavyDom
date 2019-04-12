# VueHandlingHeavyDom

So this is regarding an issue we faced while rendering a long list of 5000 items and each item is having a their own components with heavy rendering. 
In this case web app can hang or crash. I did this POC to handle such situation.

- Initially I added Virtual Scroller, which make sure only which items in dom renders. 
- Still issue was there as we scroll so fast on list, each new row it renders started making elements for internal component.
- To handle this, I just kept the required data in compoenent and changed the presentation.
