# Panda [0.5.0]
***


`Panda` is a web based admin panel for puma. It features a 
REST api for controlling services on puma and querying system info, 
plus a web frontend that does AJAX calls. It is styllistically based on 
Google's material design.

**Note**: Still under development.

### Screenshot


![Landing Page](/content/images/2014/11/Image-2014-11-24-at-16-28-13-1.png)

Raid Status Output:
![Raid Status](/content/images/2014/11/Image-2014-11-24-at-16-28-37.png)

Calibre Libraries:
![Calibre Libraries](/content/images/2014/11/Image-2014-11-24-at-16-29-06.png)





### Installation

Install a PHP5 enabled web server, then extract the files to the designated
location. Be sure the web user has ownership or at least rwx permissions for everything.

### Usage

Navigate to the url and click around. You can also go to $base_url/api/explorer and take 
a look at the available features.


### FAQ

> Does this work with mobile?

Yes, although the floater is still ugly.

> How is security?

Bad, still figuring out sudoers, root rights, and proxy scripts.


#### Contributors

- Ivan Smirnov
- API Engine: [Restler]()
