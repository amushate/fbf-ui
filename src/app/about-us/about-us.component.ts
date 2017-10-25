import {FBFBoardMember} from '../fbf-ui-model/board-member';
import {FBFDocument} from '../fbf-ui-model/fbf-document';
import {User} from '../fbf-ui-model/user';
import {BoardMemberService} from '../shared/board-member.service';
import {DocumentService} from '../shared/document.service';
import {Component, OnInit} from '@angular/core';
import {LocalStorageService} from 'ngx-webstorage';
import {FileUploader, FileItem} from 'ng2-file-upload';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  files: FileList;
  uploadfile: File;
  user: User;
  boardMembers: FBFBoardMember[];
  fbfdocument: FBFDocument;
  selected: FBFBoardMember;
  public selectedFiles;
  constructor(private storage: LocalStorageService, private boardMemberService: BoardMemberService
    , private documentService: DocumentService) {
    this.fbfdocument = new FBFDocument();
    this.selected = new FBFBoardMember;

    this.getBoardmembers();
  }

  ngOnInit() {
    this.user = new User();
  }

  isLogged() {
    this.user = this.storage.retrieve('user');
    if (this.user) {
      return true;
    } else {
      return false;
    }
  }

  getBoardmembers() {
    this.boardMemberService.getBoardMembers().subscribe(data => {
      this.boardMembers = data;
    });
  }

  uploadImage() {
    this.fbfdocument.documentType = 'FBF_BOARD_MEMBER';
    this.fbfdocument.documentName = this.selected.fullName;
    this.fbfdocument.documentOwnerId = this.selected.fbfBoardMemberId;
    this.fbfdocument.documentUrl = this.uploadfile.name;
    console.log(this.uploadfile);
    this.documentService.addDocument(this.fbfdocument, this.uploadfile).subscribe(data => {
      const savedDocument = data;
      if (savedDocument.documentUrl) {
        this.selected.imageUrl = savedDocument.documentUrl;
        this.updateFBFBoardMemberImage(savedDocument);
      } else {
        alert('error uploading document');
      }

    });
  }

  updateFBFBoardMemberImage(document: FBFDocument) {
    this.boardMemberService.updateMember(this.selected, this.selected.fbfBoardMemberId).subscribe(data => {
      alert('Document saved, successifully');
    });

  }

  getFiles(event) {
    if (event.target.files.length > 0) {
      this.uploadfile = event.target.files[0];
    }
  }

}
