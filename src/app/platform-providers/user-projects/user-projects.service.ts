import {Observable} from "rxjs";
import {MenuItem} from "../../components/menu/menu-item";

export abstract class UserProjectsService {
    public abstract getContextMenu(name: string, content: Observable): MenuItem[];
}